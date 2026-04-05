import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzPluginData } from "./quartz/plugins/vfile"

const includeInRecentNotes = (file: QuartzPluginData) => {
  const slug = file.slug ?? ""
  return (
    slug !== "index" &&
    slug !== "404" &&
    slug !== "tags" &&
    !slug.startsWith("tags/") &&
    !slug.endsWith("/index")
  )
}

const includeInActiveNow = (file: QuartzPluginData) => {
  const fm = file.frontmatter ?? {}
  const rank = Number(fm.rank ?? 99)
  const status = String(fm.status ?? "").toLowerCase()
  return fm.effort === true && status === "active" && rank <= 2
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Home: "/",
      "Start Here": "/start-here",
      About: "/about",
      Tags: "/tags",
      Atlas: "/Atlas",
      GitHub: "https://github.com/paruff/paruff.github.io",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.HomeQuickLinks(),
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.MobileOnly(
      Component.RecentNotes({
        title: "Active Now",
        limit: 4,
        showTags: false,
        filter: includeInActiveNow,
      }),
    ),
    Component.MobileOnly(
      Component.RecentNotes({
        title: "Recently Updated",
        limit: 4,
        showTags: false,
        filter: includeInRecentNotes,
      }),
    ),
    Component.DesktopOnly(
      Component.Explorer({
        title: "Browse Notes",
        folderDefaultState: "collapsed",
      }),
    ),
  ],
  right: [
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Active Now",
        limit: 6,
        showTags: false,
        filter: includeInActiveNow,
      }),
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recently Updated",
        limit: 8,
        showTags: false,
        filter: includeInRecentNotes,
      }),
    ),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.HomeQuickLinks(),
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        title: "Browse Notes",
        folderDefaultState: "collapsed",
      }),
    ),
  ],
  right: [
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Active Now",
        limit: 6,
        showTags: false,
        filter: includeInActiveNow,
      }),
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recently Updated",
        limit: 10,
        showTags: false,
        filter: includeInRecentNotes,
      }),
    ),
  ],
}
