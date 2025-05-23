"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const dummyData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 8,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {dummyData.map((i) => (
            <Card key={i.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={`Checkbox-${i.id}`} />
                <label
                  htmlFor={`Checkbox-${i.id}`}
                  className="text-sm text-muted-foreground"
                >
                  {i.text}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
