import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

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
        title: "Recently Updated",
        limit: 4,
        showTags: false,
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
        title: "Recently Updated",
        limit: 8,
        showTags: false,
      }),
    ),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
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
        title: "Recently Updated",
        limit: 10,
        showTags: false,
      }),
    ),
  ],
}
