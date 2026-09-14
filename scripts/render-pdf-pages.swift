import Foundation
import CoreGraphics
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments.dropFirst()

guard args.count >= 2 else {
  fputs("Usage: swift scripts/render-pdf-pages.swift input.pdf output-dir [scale]\n", stderr)
  exit(2)
}

let inputURL = URL(fileURLWithPath: String(args[args.startIndex]))
let outputDirectory = URL(fileURLWithPath: String(args[args.index(after: args.startIndex)]), isDirectory: true)
let scale = args.count >= 3 ? CGFloat(Double(args[args.index(args.startIndex, offsetBy: 2)]) ?? 3.0) : 3.0

try FileManager.default.createDirectory(at: outputDirectory, withIntermediateDirectories: true)

guard let document = CGPDFDocument(inputURL as CFURL) else {
  fputs("Could not open PDF: \(inputURL.path)\n", stderr)
  exit(1)
}

for pageNumber in 1...document.numberOfPages {
  guard let page = document.page(at: pageNumber) else { continue }

  let pageBox = page.getBoxRect(.mediaBox)
  let width = Int(pageBox.width * scale)
  let height = Int(pageBox.height * scale)
  let colorSpace = CGColorSpaceCreateDeviceRGB()

  guard let context = CGContext(
    data: nil,
    width: width,
    height: height,
    bitsPerComponent: 8,
    bytesPerRow: 0,
    space: colorSpace,
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
  ) else {
    fputs("Could not create render context for page \(pageNumber)\n", stderr)
    exit(1)
  }

  context.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
  context.fill(CGRect(x: 0, y: 0, width: width, height: height))
  context.saveGState()
  context.scaleBy(x: scale, y: scale)
  context.translateBy(x: 0, y: pageBox.height)
  context.scaleBy(x: 1, y: -1)
  context.drawPDFPage(page)
  context.restoreGState()

  guard let image = context.makeImage() else {
    fputs("Could not create image for page \(pageNumber)\n", stderr)
    exit(1)
  }

  let outputURL = outputDirectory.appendingPathComponent(String(format: "page-%02d.png", pageNumber))
  guard let destination = CGImageDestinationCreateWithURL(outputURL as CFURL, UTType.png.identifier as CFString, 1, nil) else {
    fputs("Could not create image destination: \(outputURL.path)\n", stderr)
    exit(1)
  }

  CGImageDestinationAddImage(destination, image, nil)

  if !CGImageDestinationFinalize(destination) {
    fputs("Could not write image: \(outputURL.path)\n", stderr)
    exit(1)
  }

  print(outputURL.path)
}
