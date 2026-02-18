'use client'

import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

import {Button} from "@/components/ui/button";

type MuverseMemberInfo = {
    id: string;
    name: string;
    nick: string;
    role: string;
    desc: string[];
    githubId: string;
    mainSite?: string;
}

export function MuVerseMemberCard(m: MuverseMemberInfo){
    return (
        <Card className="w-100 md:w-125 max-w-125 bg-zinc-700">
            <CardHeader>
                <CardTitle>
                    <div className="flex flex-row items-center gap-3">
                        <Avatar className="rounded-full size-15">
                            <AvatarImage src={`../../${m.id}_icon.png`} alt={`@${m.id}`}/>
                            <AvatarFallback>{`@${m.id}`}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center gap-1">
                            <p className="text-2xl">{m.name}</p>
                            <p className="text-base">{m.nick}</p>
                        </div>
                    </div>
                </CardTitle>
                <CardAction>
                    <b>{m.role}</b>
                </CardAction>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col justify-center">
                    {m.desc.map((l, k) => <p key={k}>{l}</p>)}
                </div>
            </CardContent>
            <CardAction className="mt-auto flex flex-nowrap flex-row justify-around w-full">
                <a className="basis-40 md:basis-50" href={m.mainSite}>
                    <Button className="w-full text-base rounded-full">{m.mainSite === undefined ? "TA 没有主页" : "TA 的主页"}</Button>
                </a>
                <a className="basis-40 md:basis-50" href={`https://github.com/${m.githubId}`}>
                    <Button className="w-full text-base rounded-full">TA 的 GitHub</Button>
                </a>
            </CardAction>
        </Card>
    )
}