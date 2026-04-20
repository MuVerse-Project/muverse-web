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
        <Card className="w-full max-w-none gap-4 rounded-xl border-border bg-card shadow-none">
            <CardHeader className="gap-3">
                <CardTitle>
                    <div className="flex flex-row items-center gap-3">
                        <Avatar className="rounded-full size-14 ring-1 ring-border">
                            <AvatarImage src={`../../${m.id}_icon.png`} alt={`@${m.id}`}/>
                            <AvatarFallback>{`@${m.id}`}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center gap-1">
                            <p className="text-xl font-semibold leading-6">{m.name}</p>
                            <p className="text-sm text-muted-foreground">{m.nick}</p>
                        </div>
                    </div>
                </CardTitle>
                <CardAction>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{m.role}</span>
                </CardAction>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    {m.desc.map((l, k) => <p key={k}>{l}</p>)}
                </div>
            </CardContent>
            <CardAction className="mt-auto flex w-full flex-nowrap flex-row justify-around gap-3 px-6 pb-6">
                <a className="basis-40 md:basis-50" href={m.mainSite}>
                    <Button variant="secondary" className="w-full text-sm rounded-full">{m.mainSite === undefined ? "TA 没有主页" : "TA 的主页"}</Button>
                </a>
                <a className="basis-40 md:basis-50" href={`https://github.com/${m.githubId}`}>
                    <Button className="w-full text-sm rounded-full">TA 的 GitHub</Button>
                </a>
            </CardAction>
        </Card>
    )
}