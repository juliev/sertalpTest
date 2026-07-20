"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
export type DisplayProject = {
  id: string;
  location?: string;
  material: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
    objectPosition: string;
  }[];
};

type Props = {
  projects: DisplayProject[];
  labels: {
    viewImage: string;
    close: string;
    previousImage: string;
    nextImage: string;
    imageOf: string;
  };
};

export function ProjectGallery({ projects, labels }: Props) {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    setActiveProject(null);
    openerRef.current?.focus();
  };

  useEffect(() => {
    if (activeProject === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      const project = projects[activeProject];
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowLeft" && project.images.length > 1) {
        setActiveImage((index) =>
          index === 0 ? project.images.length - 1 : index - 1,
        );
      } else if (event.key === "ArrowRight" && project.images.length > 1) {
        setActiveImage((index) => (index + 1) % project.images.length);
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          "button:not([disabled]), a[href]",
        );
        if (!focusable?.length) {
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject, projects]);

  const open = (
    index: number,
    event:
      | ReactKeyboardEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    openerRef.current = event.currentTarget;
    setActiveImage(0);
    setActiveProject(index);
  };

  const project =
    activeProject === null ? null : (projects[activeProject] ?? null);
  const image = project?.images[activeImage];

  return (
    <>
      <div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        data-testid="project-grid"
      >
        {projects.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={(event) => open(index, event)}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 motion-reduce:transform-none"
            aria-label={`${labels.viewImage}: ${[item.location, item.title].filter(Boolean).join(" — ")}`}
          >
            <span className="relative block aspect-[3/2] overflow-hidden bg-gray-100">
              <Image
                src={item.images[0].src}
                alt={item.images[0].alt}
                width={item.images[0].width}
                height={item.images[0].height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
                style={{ objectPosition: item.images[0].objectPosition }}
              />
            </span>
            <span className="block p-6">
              <span className="text-sm font-bold uppercase tracking-wide text-blue-700">
                {[item.location, item.material].filter(Boolean).join(" · ")}
              </span>
              <span className="mt-2 block text-xl font-bold text-gray-950">
                {item.title}
              </span>
              {item.description ? (
                <span
                  className="mt-3 block leading-7 text-gray-600"
                  data-testid="project-description"
                >
                  {item.description}
                </span>
              ) : null}
            </span>
          </button>
        ))}
      </div>

      {project && image ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/90 p-4"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              close();
            }
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative w-full max-w-5xl rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="absolute right-3 top-3 z-10 inline-flex size-11 items-center justify-center rounded-full bg-white text-gray-900 shadow transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-600"
              aria-label={labels.close}
            >
              <X aria-hidden="true" className="size-6" />
            </button>

            <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-gray-950">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="100vw"
                className="h-full w-full object-contain"
              />
            </div>

            {project.images.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage((index) =>
                      index === 0 ? project.images.length - 1 : index - 1,
                    )
                  }
                  className="absolute left-7 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-600"
                  aria-label={labels.previousImage}
                >
                  <ChevronLeft aria-hidden="true" className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage(
                      (index) => (index + 1) % project.images.length,
                    )
                  }
                  className="absolute right-7 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-600"
                  aria-label={labels.nextImage}
                >
                  <ChevronRight aria-hidden="true" className="size-6" />
                </button>
                <p className="mt-3 text-sm font-semibold text-gray-600">
                  {labels.imageOf
                    .replace("{current}", String(activeImage + 1))
                    .replace("{total}", String(project.images.length))}
                </p>
              </>
            ) : null}

            <div className="mt-5 pr-12">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                {[project.location, project.material]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
              <h2
                id="project-dialog-title"
                className="mt-1 text-2xl font-bold text-gray-950"
              >
                {project.title}
              </h2>
              {project.description ? (
                <p className="mt-2 leading-7 text-gray-600">
                  {project.description}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
