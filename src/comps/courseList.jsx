import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  { id: 1, title: "Course 1", description: "Description for course 1" },
  { id: 2, title: "Course 2", description: "Description for course 2" },
  { id: 3, title: "Course 3", description: "Description for course 3" },
  { id: 1, title: "Course 1", description: "Description for course 1" },
  { id: 2, title: "Course 2", description: "Description for course 2" },
  { id: 3, title: "Course 3", description: "Description for course 3" },
  { id: 1, title: "Course 1", description: "Description for course 1" },
  { id: 2, title: "Course 2", description: "Description for course 2" },
];

const CourseList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {courses.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="https://placehold.co/600x400"
              alt="Placeholder"
              className="w-full h-48 object-cover"
              width="200"
              height="200"
              style={{ aspectRatio: "200/200", objectFit: "cover" }}
            />
            <CardDescription>{course.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button>View</Button>
            <Button className="ml-2 bg-destructive">quiz</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CourseList;
