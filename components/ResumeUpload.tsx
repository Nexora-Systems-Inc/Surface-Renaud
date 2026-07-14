"use client";

import { useCallback, useId, useRef, useState } from "react";
import { FileText, Upload, X } from "lucide-react";
import {
  ACCEPTED_RESUME_ACCEPT_ATTR,
  MAX_RESUME_SIZE_BYTES,
} from "@/lib/careers/constants";
import { validateResumeFile } from "@/lib/careers/validation";

type ResumeUploadProps = {
  file: File | null;
  onChange: (file: File | null) => void;
  error?: string | null;
  disabled?: boolean;
};

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ResumeUpload({
  file,
  onChange,
  error,
  disabled = false,
}: ResumeUploadProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const applyFile = useCallback(
    (next: File | null) => {
      if (!next) {
        setLocalError(null);
        onChange(null);
        return;
      }

      const validationError = validateResumeFile(next);
      if (validationError) {
        setLocalError(validationError);
        onChange(null);
        if (inputRef.current) inputRef.current.value = "";
        return;
      }

      setLocalError(null);
      onChange(next);
    },
    [onChange],
  );

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (disabled) return;

    const dropped = event.dataTransfer.files?.[0] ?? null;
    applyFile(dropped);
  };

  const displayError = error || localError;

  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="font-sans-body text-[#7A7774] text-[11px] tracking-[0.2em] uppercase block"
      >
        Résumé
        <span className="text-[#7A7774]/70 normal-case tracking-normal ml-2">
          Optional — PDF, DOC, or DOCX · Max {MAX_RESUME_SIZE_BYTES / (1024 * 1024)} MB
        </span>
      </label>

      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-describedby={displayError ? `${inputId}-error` : undefined}
        onKeyDown={(event) => {
          if (disabled) return;
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragEnter={(event) => {
          event.preventDefault();
          if (!disabled) setIsDragging(true);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          if (!disabled) setIsDragging(true);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          setIsDragging(false);
        }}
        onDrop={handleDrop}
        onClick={() => {
          if (!disabled) inputRef.current?.click();
        }}
        className={`relative border border-dashed rounded-nx-sm px-6 py-8 text-center transition-all duration-300 cursor-pointer ${
          disabled
            ? "opacity-60 cursor-not-allowed border-[#EDE9E3] bg-[#FAFAF8]"
            : isDragging
              ? "border-[#B8975A] bg-[#B8975A]/5"
              : displayError
                ? "border-red-400/60 bg-red-50/40"
                : "border-[#EDE9E3] bg-[#FAFAF8] hover:border-[#B8975A]/60 hover:bg-[#F5F2EE]"
        }`}
      >
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept={ACCEPTED_RESUME_ACCEPT_ATTR}
          disabled={disabled}
          className="sr-only"
          onChange={(event) => {
            const selected = event.target.files?.[0] ?? null;
            applyFile(selected);
          }}
        />

        {file ? (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="w-11 h-11 border border-[#B8975A]/40 rounded-nx-sm flex items-center justify-center shrink-0">
              <FileText size={18} className="text-[#B8975A]" />
            </div>
            <div className="text-center sm:text-left min-w-0">
              <p className="font-sans-body text-[#2C2B29] text-sm truncate max-w-xs sm:max-w-sm">
                {file.name}
              </p>
              <p className="font-sans-body text-[#7A7774] text-xs font-light mt-1">
                {formatFileSize(file.size)} · Ready to submit
              </p>
            </div>
            <button
              type="button"
              aria-label="Remove résumé"
              disabled={disabled}
              onClick={(event) => {
                event.stopPropagation();
                applyFile(null);
                if (inputRef.current) inputRef.current.value = "";
              }}
              className="inline-flex items-center justify-center w-9 h-9 border border-[#EDE9E3] hover:border-[#B8975A] text-[#7A7774] hover:text-[#B8975A] rounded-nx-sm transition-colors duration-300 shrink-0"
            >
              <X size={14} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="w-11 h-11 border border-[#B8975A]/40 rounded-nx-sm flex items-center justify-center">
              <Upload size={18} className="text-[#B8975A]" />
            </div>
            <div>
              <p className="font-sans-body text-[#2C2B29] text-sm">
                Drag and drop your résumé here
              </p>
              <p className="font-sans-body text-[#7A7774] text-xs font-light mt-1">
                or <span className="text-[#B8975A]">browse files</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {displayError ? (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="font-sans-body text-red-600/80 text-xs font-light"
        >
          {displayError}
        </p>
      ) : null}
    </div>
  );
}
