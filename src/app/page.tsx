import { MuVerse } from "@mupack/mu-verse-logo";
import { MuVerseMemberCard } from "@mupack/muverse-member-info";
import { ModeToggle } from "@/components/mupack/theme-changer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-[15px] font-semibold text-foreground">
              MuVerse
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <a href="#home" className="hover:text-foreground">首页</a>
              <a href="#members" className="hover:text-foreground">成员</a>
              <a href="https://github.com/MuVerse-Project/muverse-web" className="hover:text-foreground">GitHub</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://github.com/MuVerse-Project/muverse-web" className="text-sm text-muted-foreground hover:text-foreground md:hidden">
              GitHub
            </a>
            <div className="h-5 w-px bg-border" />
            <ModeToggle />
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto w-full max-w-[1152px] px-6 pb-20 pt-16 md:pb-24 md:pt-24">
          <div className="grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr]">
            <div className="text-center md:text-left">
              <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">MuVerse Official</p>
              <h1 className="mt-3 text-5xl font-bold leading-[1.08] text-foreground md:text-6xl">
                <span className="bg-gradient-to-r from-[var(--vp-c-brand-1)] to-[var(--vp-c-brand-3)] bg-clip-text text-transparent">
                  MuVerse
                </span>
                <br />
                暮云阁
              </h1>
              <p className="mt-5 max-w-2xl text-[20px] leading-8 text-muted-foreground md:text-[24px]">
                探讨 Java / Kotlin 与 Minecraft 生态的技术实践，分享插件、模组与工程化经验。
              </p>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground">
                一个小组织，致力于研究 Minecraft 服务器技术应用，也会持续探索其他值得投入的开发方向。
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <a
                  href="https://github.com/MuVerse-Project/muverse-web"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-[var(--vp-c-brand-2)]"
                >
                  GitHub
                </a>
                <a
                  href="#members"
                  className="rounded-full border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
                >
                  查看成员
                </a>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">社群 QQ：770591025</p>
            </div>

            <div className="mx-auto flex h-[320px] w-[320px] items-center justify-center rounded-3xl border border-border bg-card md:h-[360px] md:w-[360px]">
              <MuVerse width="260px" height="260px" />
            </div>
          </div>
        </section>

        <section id="members" className="border-t border-border bg-background py-16">
          <div className="mx-auto max-w-[1152px] px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">组织成员</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-7 text-muted-foreground">
              这里是 MuVerse 的核心成员与吉祥物，欢迎来认识我们。
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <MuVerseMemberCard
                id={"mucloud"}
                name={"Mu_Cloud"}
                nick={"暮云"}
                role={"暮云阁主"}
                desc={["MADE IN BROKEN FLOWER. | “葬花依在。”", "Java & Kotlin 精进中..."]}
                githubId={"MuCloudOfficial"}
                mainSite="https://mucloud.muverse.ltd"
              />
              <MuVerseMemberCard
                id={"zhijun4030"}
                name={"HeZhijun4030"}
                nick={"Zhijun-cms"}
                role={"CMS 成员"}
                desc={["C & CPP & Python Crucial", "阴暗抽象后端大手子"]}
                githubId={"HeZhijun4030"}
                mainSite="https://zhijun43-cms.muverse.ltd"
              />
              <MuVerseMemberCard
                id={"christine"}
                name={"G_Christine"}
                nick={"Christine."}
                role={"应该是成员吧 :P"}
                desc={["前端专家（", "精通各种前端，还会 Python，简直是居家旅行必备的开发小帮手啊！ ()"]}
                githubId={"ChristineZhiMei"}
              />
              <MuVerseMemberCard
                id={"mumu"}
                name={"Mu_Mu"}
                nick={"暮暮"}
                role={"吉祥物"}
                desc={["是吉祥物，也有可能和暮云是水仙，谁知道呢 💞~"]}
                githubId={"MuCloudOfficial"}
                mainSite="https://mucloud.muverse.ltd"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-[1152px] justify-center px-6 text-center text-sm text-muted-foreground">
          <p>
            Designed by Mu_Cloud 💞 Mu_Mu | Powered by Next.js & React |
            {" "}
            <a href="https://github.com/MuVerse-Project/muverse-web" className="hover:underline">
              Source Code
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
