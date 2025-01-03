"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { OlympiadAddFormRout } from "@/components/custom/forms/olympiads/Olympiad";
import { StrapiImage } from "@/components/custom/StrapiImage";
import useOlympiadStore from "@/store/useOlympiadsStore";

export default function OlympiadsRoute() {
  const { olympiads } = useOlympiadStore();

  return (
    <div className="w-full min-h-screen p-2 flex flex-col gap-y-3">
      <OlympiadAddFormRout />
      <div className="grid grid-cols-3 p-2 gap-2">
        {olympiads.map((olympiad) => (
          <Card className=" ">
            <CardHeader>
              <CardTitle>{olympiad.heading}</CardTitle>
              <CardDescription>{olympiad.subHeading}</CardDescription>
            </CardHeader>
            <CardContent>
              <StrapiImage
                src={olympiad.image.url}
                alt={olympiad.image.alternativeText || ""}
                width={200}
                height={140}
                className={` object-cover w-full h-full`}
                style={{
                  aspectRatio: "200/100",
                  objectFit: "cover",
                }}
              />
              <div className=" flex gap-x-10 ">
                <div>
                  <label className="text-sm text-muted-foreground">
                    Начало:
                  </label>
                  <p className="text-sm">{olympiad.dateEnd}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">
                    Начало:
                  </label>
                  <p className="text-sm">{olympiad.dateEnd}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex  items-start gap-x-5">
              <Button>
                <Link href={`/dashboard/olympiads/${olympiad.documentId}`}>Добавить участника</Link>
              </Button>
              <Button>Редактировать</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
