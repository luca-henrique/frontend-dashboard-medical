import { useState, useRef } from "react";

import Close from "@mui/icons-material/Close";
import CameraIcon from "@mui/icons-material/Camera";

interface ImageUploadProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

export default function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onChange(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleRemove = () => {
    onChange(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />

      {!value ? (
        <div
          className={`relative w-32 h-32 rounded-full border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${dragActive
            ? "border-primary bg-primary/5 scale-105"
            : "border-gray-300 hover:border-primary/50 hover:bg-gray-50"
            }`}
          onClick={handleClick}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <CameraIcon />
          <span className="text-xs text-gray-500 text-center px-1">
            Adicionar foto
          </span>
        </div>
      ) : (
        <div className="relative w-32 h-32">
          <img
            src={value}
            alt="Profile preview"
            className="w-32 h-32 rounded-full object-cover border-2 border-primary"
          />
          <button
            title='Remover imagem'
            type="button"
            onClick={handleRemove}
            className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
          >
            <Close />
          </button>
        </div>
      )}

      <p className="mt-2 text-xs text-muted-foreground">
        {value
          ? "Clique na imagem para alterar"
          : "Arraste uma imagem ou clique para selecionar"}
      </p>
    </div>
  );
}