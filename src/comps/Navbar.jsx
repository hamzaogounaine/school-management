import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Book,
  Clock,
  File,
  GlobeIcon,
  HomeIcon,
  LayoutGridIcon,
  List,
  MenuIcon,
  Moon,
  MoonIcon,
  MountainIcon,
  Sun,
  UsersIcon,
} from "lucide-react";
import { Link, Routes, Route } from "react-router-dom";



import { FloatButton } from "antd";
import { useGeneral } from "../contexts/generalContext";
import CoursesList from "../pages/CoursesList";
import DocumentRequest from "../pages/Document";
import QuizPage from "../pages/QuizPage";
import WeeklySchedule from "../pages/WeeklySchedule";



export default function Component() {
  const {dark, setDark} = useGeneral();

  const handleDarkMode = () => {
    setDark((prev) => !prev);
  };
  return (
    <div className={`flex h-screen w-full ${dark ? 'dark' : ''} `}>
      <div className="hidden lg:block lg:w-64 lg:shrink-0 lg:border-r bg-background">
        <div className="flex h-full flex-col justify-between py-6 px-4">
          <div className="space-y-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold "
              prefetch={false}
            >
              <img
                src="https://seeklogo.com/images/O/ofppt-logo-8EC0468579-seeklogo.com.png"
                width={50}
                alt=""
              />
              <span className="text-lg text-foreground">OFPPT</span>
            </Link>
            <hr />
            <nav className="space-y-3">
              <Link
                to="/WeeklySchedule"
                className="bg-secondary text-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium  border-foreground "
                prefetch={false}
              >
                <Clock className="h-5 w-5" />
                Weekly Schedule
              </Link>
              <Link
                to="/quizzes"
                className="bg-secondary text-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium  border-foreground "
                prefetch={false}
              >
                <List className="h-5 w-5" />
                Quizzes
              </Link>
              <Link
                to="/courses"
                className="bg-secondary text-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium  border-foreground "
                prefetch={false}
              >
                <Book className="h-5 w-5" />
                Courses
              </Link>
              <Link
                to="/documents"
                className="bg-secondary text-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium  border-foreground "
                prefetch={false}
              >
                <File className="h-5 w-5" />
                Documents
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <Button variant="destructive" size="sm" className="w-full">
              Logout
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <GlobeIcon className="h-5 w-5" />
              <Select className='border border-foreground'>
                <SelectTrigger className="w-[180px] border border-foreground">
                  <SelectValue placeholder="Selectionner la langue" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Langue</SelectLabel>
                    <SelectItem value="francais">Francais</SelectItem>
                    <SelectItem value="arabe">Arabe</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <header className="sticky top-0 z-10 border-b bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900 lg:hidden">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold"
              prefetch={false}
            >
              <img
                src="https://seeklogo.com/images/O/ofppt-logo-8EC0468579-seeklogo.com.png"
                width={50}
                alt=""
              />
              <span className="text-lg text-foreground">OFPPT</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex h-full flex-col justify-between py-6 px-4">
                  <div className="space-y-6">
                    <nav className="space-y-1">
                      <Link
                        to="/"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                        prefetch={false}
                      >
                        <HomeIcon className="h-5 w-5" />
                        Home
                      </Link>
                      <Link
                        to="/about"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                        prefetch={false}
                      >
                        <LayoutGridIcon className="h-5 w-5" />
                        About
                      </Link>
                      <Link
                        to="/contact"
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
                        prefetch={false}
                      >
                        <UsersIcon className="h-5 w-5" />
                        Contact
                      </Link>
                    </nav>
                  </div>
                  <div className="space-y-4">
                    <div className="flex  items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <GlobeIcon className="h-5 w-5" />
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="La langue" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Langue</SelectLabel>
                            <SelectItem value="francais">Francais</SelectItem>
                            <SelectItem value="arabe">Arabe</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="destructive" size="sm" className="w-full">
                      Logout
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <main className="p-4 lg:p-8 bg-secondary overflow-y-scroll min-h-screen ">
          <Routes>
              <Route path="/WeeklySchedule" element={<WeeklySchedule />} />
              <Route path="/quizzes" element={<QuizPage />} />
              <Route path="/courses" element={<CoursesList />} />
              <Route path="/documents" element={<DocumentRequest />} />
          </Routes>
        </main>
        <FloatButton onClick={handleDarkMode} className="flex justify-center items-center shadow-lg bg-foreground" icon={<div className="flex justify-center items-center w-full h-full hover:text-background">{dark ? <Sun /> : <Moon />}</div>} tooltip={<div>Switch mode</div>} />
      </div>
    </div>
  );
}
