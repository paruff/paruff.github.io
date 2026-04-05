import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const quickLinks = [
  { label: "Start Here", href: "/start-here" },
  { label: "About", href: "/about" },
  { label: "Tags", href: "/tags" },
  { label: "Atlas", href: "/Atlas" },
  { label: "Efforts", href: "/Efforts" },
]

export default (() => {
  const HomeQuickLinks: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    if (fileData.slug !== "index") {
      return null
    }

    return (
      <nav class={classNames(displayClass, "quick-links-strip")} aria-label="Quick links">
        {quickLinks.map((link) => (
          <a href={link.href}>{link.label}</a>
        ))}
      </nav>
    )
  }

  return HomeQuickLinks
}) satisfies QuartzComponentConstructor
