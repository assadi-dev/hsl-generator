import ItemValidFileCard from "@/components/Cards/ItemValidFileCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { filesProcessQueue } from "@/store/queueProcessFile.store";
import React from "react";

const PreviewValidFiles = () => {
  const queues = filesProcessQueue.queue();

  return (
    <Card className="h-full  w-full bg-primary-gradient border-white/50">
      <CardHeader>
        <p className="text-primary-gradient text-xl font-semibold flex justify-between">
          Fichier validé: {queues.length}
        </p>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[52vh] 2xl:h-[58vh]  bg-slate-950/50 px-3 py-3 rounded-lg ring-1 ">
          <ul className="grid grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 h-full">
            {queues.map((v) => (
              <li key={v.id}>
                <ItemValidFileCard item={v} />
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default PreviewValidFiles;
