"use client";

import { Download } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

// Context menu component removed - using simple div instead

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  url: string;
  className?: string;
  children: React.ReactNode;
}

interface LogoImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface LogoTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

interface LogoBrandDownloadProps {
  children: React.ReactNode;
  files: Array<{
    name: string;
    path: string;
    format: "svg" | "png" | "jpg" | "jpeg" | "webp";
  }>;
  className?: string;
}

const LogoBrandDownload = ({
  children,
  files,
  className,
}: LogoBrandDownloadProps) => {
  const handleDownload = async (file: LogoBrandDownloadProps["files"][0]) => {
    try {
      const response = await fetch(file.path);
      if (!response.ok) throw new Error(`Failed to fetch ${file.name}`);

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <div className={cn("inline-block", className)}>
      {children}
      <div className="w-48">
        {files.map((file) => (
          <div
            key={file.path}
            onClick={() => handleDownload(file)}
            className="cursor-pointer flex items-center p-2 hover:bg-muted rounded"
          >
            <Download className="mr-2 h-4 w-4" />
            Download {file.format.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

const Logo = ({ url, className, children, ...props }: LogoProps) => {
  return (
    <a
      href={url}
      className={cn("flex max-h-8 items-center gap-2", className)}
      {...props}
    >
      {children}
    </a>
  );
};

const LogoImage = ({ src, alt, className }: LogoImageProps) => (
  <Image src={src} alt={alt} width={32} height={32} className={cn("block h-8", className)} />
);

const LogoImageMobile = ({ src, alt, className }: LogoImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={32}
    height={32}
    className={cn("flex h-8 md:hidden", className)}
  />
);

const LogoImageDesktop = ({
  src,
  alt,
  className,
}: LogoImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={32}
    height={32}
    className={cn("hidden h-8 md:flex", className)}
  />
);

const LogoText = ({ children, className, ...props }: LogoTextProps) => (
  <span
    className={cn("text-lg font-semibold tracking-tighter", className)}
    {...props}
  >
    {children}
  </span>
);

const LogoTextMobile = ({ children, className, ...props }: LogoTextProps) => (
  <span
    className={cn(
      "text-lg font-semibold tracking-tighter md:hidden",
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

const LogoTextDesktop = ({ children, className, ...props }: LogoTextProps) => (
  <span
    className={cn(
      "hidden text-lg font-semibold tracking-tighter md:flex",
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

export {
  Logo,
  LogoBrandDownload,
  LogoImage,
  LogoImageDesktop,
  LogoImageMobile,
  LogoText,
  LogoTextDesktop,
  LogoTextMobile,
};
