import Foundation
import Vision
import CoreGraphics
import ImageIO

let args = CommandLine.arguments.dropFirst()

guard let imagePath = args.first else {
  fputs("Usage: swift scripts/vision-ocr.swift image.png [language...]\n", stderr)
  exit(2)
}

let languages = Array(args.dropFirst())
let imageURL = URL(fileURLWithPath: imagePath)

guard
  let source = CGImageSourceCreateWithURL(imageURL as CFURL, nil),
  let image = CGImageSourceCreateImageAtIndex(source, 0, nil)
else {
  fputs("Could not load image: \(imagePath)\n", stderr)
  exit(1)
}

let request = VNRecognizeTextRequest { request, error in
  if let error {
    fputs("OCR error: \(error.localizedDescription)\n", stderr)
    exit(1)
  }

  let observations = (request.results as? [VNRecognizedTextObservation]) ?? []
  let lines = observations.compactMap { observation in
    observation.topCandidates(1).first?.string
  }

  print(lines.joined(separator: "\n"))
}

request.recognitionLevel = .accurate
request.usesLanguageCorrection = true
if !languages.isEmpty {
  request.recognitionLanguages = languages
}

let handler = VNImageRequestHandler(cgImage: image, options: [:])
try handler.perform([request])
