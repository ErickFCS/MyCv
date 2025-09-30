import { z } from "zod";


const icons = [
    "Actions",
    "Api",
    "Cake",
    "Clean",
    "Docker",
    "Electronics",
    "Eslint",
    "Express",
    "Git",
    "GitHub",
    "Language",
    "LinkedIn",
    "Linux",
    "Location",
    "Mail",
    "Pcb",
    "Phone",
    "ProblemSolved",
    "React",
    "Sql",
    "Team",
    "Test"
] as const;

export const IconSchema = z.enum(icons).optional();

export type Icons = z.infer<typeof IconSchema>;

export interface Info {
    name: string;
    data: string;
    icon?: Icons;
}

export const InfoSchema = z.object({
    data: z.string(),
    icon: IconSchema,
    name: z.string()
});

export interface Item {
    date?: string;
    name?: string;
    clarification?: string;
    list?: {
        item: string;
        icon?: Icons;
    }[];
    list_short?: boolean;
}

export const ItemSchema = z.object({
    clarification: z.string().optional(),
    date: z.string().optional(),
    list: z.array(z.object({
        icon: IconSchema,
        item: z.string()
    })).optional(),
    list_short: z.boolean().optional(),
    name: z.string().optional()
});

export interface Section {
    name: string;
    items: Item[]
}

export const SectionSchema = z.object({
    items: z.array(ItemSchema),
    name: z.string()
});

export interface ResumeData {
    pageTitle: string;
    name: string;
    image: string;
    role: string;
    description: string;
    infos: Info[]
    sections: Section[]
}

export const ResumeDataSchema = z.object({
    description: z.string(),
    image: z.string(),
    infos: z.array(InfoSchema),
    name: z.string(),
    pageTitle: z.string(),
    role: z.string(),
    sections: z.array(SectionSchema)
});
