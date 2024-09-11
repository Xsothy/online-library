import React, { useCallback, useState } from 'react'
import { useDropzone, DropzoneOptions } from 'react-dropzone'
import { Button } from "@/Components/ui/button"
import { X } from 'lucide-react'

export interface DropzoneProps extends DropzoneOptions {
    onFileChange: (file: File | null) => void
    value: File | null
}

export function Dropzone({ onFileChange, value, ...props }: DropzoneProps) {
    const [preview, setPreview] = useState<string | null>(null)

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0]
            onFileChange(file)
            setPreview(URL.createObjectURL(file))
        }
    }, [onFileChange])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        ...props,
        onDrop,
        maxFiles: 1
    })

    const removeFile = () => {
        onFileChange(null)
        setPreview(null)
    }

    if (value && preview) {
        return (
            <div className="relative">
                <img src={preview} alt="Preview" className="w-full h-auto rounded-lg" />
                <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={removeFile}
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
        )
    }

    return (
        <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors">
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the file here ...</p>
            ) : (
                <p>Drag 'n' drop an image here, or click to select a file</p>
            )}
        </div>
    )
}
