'use client'

import {Button} from "@/components/ui/button";

type MuButtonProps = {
    text: string;
}

export function MuButton({text}: MuButtonProps) {
    return(
        <Button className="rounded-full">
            {text}
        </Button>
    )
}