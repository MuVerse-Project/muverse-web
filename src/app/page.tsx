import {MuVerse, NextJSIcon} from "@mupack/mu-verse-logo";
import {MuVerseMemberCard} from "@mupack/muverse-member-info";

export default function Home() {
    return (
        <div>
            <div className="min-h-screen px-10 md:px-0 md:mx-30 bg-zinc-900 flex flex-col items-center justify-center text-black dark:text-white">
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
                <p>Designed by Mu_Cloud 💞 Mu_Mu | Based on{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline" width={64} height={64} fill="currentColor" viewBox="0 0 394 80"><path fill="currentColor" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="currentColor" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
                    {" "}
                    & React |
                    {" "}
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
