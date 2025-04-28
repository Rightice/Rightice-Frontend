"use client"
import { TextGenerateEffect } from "./ui/text-generate-effect"

const words = `We Specialize In Providing Professional And Affordable Legal Assistance For All.`;

export default function TextGenerateEffectDemo() {
  return (
    <div className="w-full mx-auto px-4">
      <TextGenerateEffect words={words} />
    </div>
  )
}