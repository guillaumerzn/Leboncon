'use client'

import React, { useState } from "react"
import { Button } from "./button"
import { Upload } from 'lucide-react'

type FileUploadProps = {
  onAddProduct: (imageUri: string) => void
}

export default function FileUpload({ onAddProduct }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [imageUri, setImageUri] = useState<string>("")

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length) {
      const file = files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageUri(event.target.result as string)
          onAddProduct(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageUri(event.target.result as string)
          onAddProduct(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="w-[400px] rounded-lg shadow-md border-4 border-dashed border-gray-300 bg-gray-200 hover:shadow-xl flex justify-center items-center p-8">
      <div
        className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
          isDragging ? 'bg-gray-300' : 'bg-transparent'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Upload className="w-16 h-16 text-gray-400 mb-4" />
        <p className="text-gray-500 text-center mb-4">
          Glissez et déposez votre image ici ou cliquez pour sélectionner
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          id="fileInput"
        />
        <Button
          onClick={() => document.getElementById('fileInput')?.click()}
          className="bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition-colors"
        >
          Sélectionner une image
        </Button>
      </div>
    </div>
  )
}