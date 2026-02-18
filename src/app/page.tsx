import {MuVerse} from "@mupack/mu-verse-logo";
import {MuVerseMemberCard} from "@mupack/muverse-member-info";

export default function Home() {
    return (
        <div>
            <div className="min-h-screen mx-0 md:mx-30 bg-zinc-900 flex flex-col items-center justify-center text-black dark:text-white">
                <div className="flex flex-row justify-center items-center">
                    <MuVerse width="300px" height="300px"/>
                </div>
                <div className="mx-10 gap-10 flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-bold">MuVerse | 暮云阁</h1>
                        <p className="mt-2 text-lg">
                            一个小组织，致力于探讨研究 Java & Kotlin 程序，Minecraft 服务器技术应用与 Minecraft 插件 & 模组。Emmm，当然也有其他技术。
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <h4 className="font-bold">社群</h4>
                        <p className="text-lg">QQ: 770591025</p>
                    </div>

                    <div className="my-10 flex flex-col justify-center items-center">
                        <h4 className="mb-10 font-bold">组织成员</h4>
                        <div className="flex flex-wrap gap-10 justify-center items-stretch">
                            <MuVerseMemberCard
                                id={"mucloud"}
                                name={"Mu_Cloud"}
                                nick={"暮云"}
                                role={"暮云阁主"}
                                desc={[
                                    "MADE IN BROKEN FLOWER. | “葬花依在。”",
                                    "Java & Kotlin 精进中..."
                                ]}
                                githubId={"MuCloudOfficial"}
                                mainSite="https://mucloud.muverse.ltd"
                            />
                            <MuVerseMemberCard
                                id={"zhijun4030"}
                                name={"HeZhijun4030"}
                                nick={"Zhijun-cms"}
                                role={"CMS 成员"}
                                desc={[
                                    "C & CPP & Python Crucial",
                                    "阴暗抽象后端大手子"
                                ]}
                                githubId={"HeZhijun4030"}
                                mainSite="https://zhijun43-cms.muverse.ltd"
                            />
                            <MuVerseMemberCard
                                id={"christine"}
                                name={"G_Christine"}
                                nick={"Christine."}
                                role={"应该是成员吧 :P"}
                                desc={[
                                    "前端专家（",
                                    "精通各种前端，还会 Python，简直是居家旅行必备的开发小帮手啊！ ()"
                                ]}
                                githubId={"ChristineZhiMei"}
                            />
                            <MuVerseMemberCard
                                id={"mumu"}
                                name={"Mu_Mu"}
                                nick={"暮暮"}
                                role={"吉祥物"}
                                desc={[
                                    "是吉祥物，也有可能和暮云是水仙，谁知道呢 💞~"
                                ]}
                                githubId={"MuCloudOfficial"}
                                mainSite="https://mucloud.muverse.ltd"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-gray-950 mx-0 md:mx-30 flex flex-row justify-center items-center">
                <p>Designed by Mu_Cloud 💞 Mu_Mu | Based on Next.js & React |{" "}
                    <a
                        href="https://github.com/MuVerse-Project/muverse-web"
                        className="hover:underline text-gray-800 dark:text-gray-400"
                    >
                        Source Code
                    </a>
                </p>
            </div>
        </div>
    );
}
