/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pbB8TIyGcdE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useGeneral } from "../contexts/generalContext";

export default function HomePage() {
    const { dark, setDark } = useGeneral();
  return (
<<<<<<< HEAD
    <div className={`flex flex-col min-h-dvh ${dark ? 'dark' : ''}`}>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
          <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-2 md:gap-16">
              <div>
                <img
                  src="/placeholder.svg"
                  width="800"
                  height="450"
                  alt="Latest Blog Post"
                  className="aspect-[16/9] overflow-hidden rounded-xl object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Latest Post</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The Future of Web Development: Trends and Innovations
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Explore the latest trends and innovations shaping the future of web development, from AI-powered tools
                  to serverless architectures.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Blog Posts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our latest blog posts on web development, design, and more.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <Link href="#" prefetch={false}>
                  <CardContent className="space-y-2">
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="Building a Design System"
                      className="aspect-video overflow-hidden rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">Building a Design System</h3>
                      <p className="text-muted-foreground line-clamp-2">
                        Discover the key principles and best practices for building a robust design system that scales
                        with your product.
                      </p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="#" prefetch={false}>
                  <CardContent className="space-y-2">
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="The Rise of JAMStack"
                      className="aspect-video overflow-hidden rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">The Rise of JAMStack</h3>
                      <p className="text-muted-foreground line-clamp-2">
                        Explore the benefits of the JAMStack architecture and how it's transforming the way we build
                        modern web applications.
                      </p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="#" prefetch={false}>
                  <CardContent className="space-y-2">
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="Accessibility in Web Design"
                      className="aspect-video overflow-hidden rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">Accessibility in Web Design</h3>
                      <p className="text-muted-foreground line-clamp-2">
                        Learn how to create inclusive and accessible web experiences that cater to users with diverse
                        needs and abilities.
                      </p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
              <Card>
                <Link href="#" prefetch={false}>
                  <CardContent className="space-y-2">
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="The Power of CSS in Web Development"
                      className="aspect-video overflow-hidden rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">The Power of CSS in Web Development</h3>
                      <p className="text-muted-foreground line-clamp-2">
                        Explore the latest CSS features and techniques that can transform your web designs and improve
                        development efficiency.
                      </p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <aside className="bg-muted p-6 md:p-8 lg:p-12">
        <div className="container max-w-md space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Categories</h2>
            <div className="grid gap-2">
              <Link
                href="#"
                className="rounded-md bg-background px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                prefetch={false}
              >
                Web Development
              </Link>
              <Link
                href="#"
                className="rounded-md bg-background px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                prefetch={false}
              >
                Design
              </Link>
              <Link
                href="#"
                className="rounded-md bg-background px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                prefetch={false}
              >
                Productivity
              </Link>
              <Link
                href="#"
                className="rounded-md bg-background px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                prefetch={false}
              >
                Career
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Popular Posts</h2>
            <div className="grid gap-4">
              <Link href="#" className="grid grid-cols-[48px,1fr] items-start gap-4" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width="48"
                  height="48"
                  alt="Building a Design System"
                  className="aspect-square overflow-hidden rounded-md object-cover"
                />
                <div className="space-y-1">
                  <h3 className="text-sm font-medium">Building a Design System</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Discover the key principles and best practices for building a robust design system that scales with
                    your product.
                  </p>
                </div>
              </Link>
              <Link href="#" className="grid grid-cols-[48px,1fr] items-start gap-4" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width="48"
                  height="48"
                  alt="The Rise of JAMStack"
                  className="aspect-square overflow-hidden rounded-md object-cover"
                />
                <div className="space-y-1">
                  <h3 className="text-sm font-medium">The Rise of JAMStack</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Explore the benefits of the JAMStack architecture and how it's transforming the way we build modern
                    web applications.
                  </p>
                </div>
              </Link>
              <Link href="#" className="grid grid-cols-[48px,1fr] items-start gap-4" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width="48"
                  height="48"
                  alt="Accessibility in Web Design"
                  className="aspect-square overflow-hidden rounded-md object-cover"
                />
                <div className="space-y-1">
                  <h3 className="text-sm font-medium">Accessibility in Web Design</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Learn how to create inclusive and accessible web experiences that cater to users with diverse needs
                    and abilities.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Newsletter</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to stay up-to-date with the latest blog posts and industry news.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </aside>
=======
    <div className='bg-secondary'>

    <CourseList />
>>>>>>> bb75778b8b0d37f0e18afca7fcfc54b1e0c845d4
    </div>
  )
}