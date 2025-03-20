import { z } from 'zod'

const icons = [
    'Actions',
    'Api',
    'Cake',
    'Clean',
    'Docker',
    'Electronics',
    'Eslint',
    'Express',
    'Git',
    'GitHub',
    'Language',
    'LinkedIn',
    'Linux',
    'Location',
    'Mail',
    'Pcb',
    'Phone',
    'ProblemSolved',
    'React',
    'Sql',
    'Team',
    'Test'
] as const

export const IconSchema = z.enum(icons)

export type Icons = z.infer<typeof IconSchema>

export interface Info {
    name: string;
    data: string;
    icon: Icons;
}

export const InfoSchema = z.object({
    name: z.string(),
    data: z.string(),
    icon: IconSchema
})

export interface Item {
    date?: string;
    name?: string;
    clarification?: string;
    list?: {
        item: string;
        icon: Icons;
    }[];
    list_short?: boolean;
}

export const ItemSchema = z.object({
    date: z.string().optional(),
    name: z.string().optional(),
    clarification: z.string().optional(),
    list: z.array(z.object({
        item: z.string(),
        icon: IconSchema
    })).optional(),
    list_short: z.boolean().optional()
})

export interface Section {
    name: string;
    items: Item[]
}

export const SectionSchema = z.object({
    name: z.string(),
    items: z.array(ItemSchema)
})

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
    pageTitle: z.string(),
    name: z.string(),
    image: z.string(),
    role: z.string(),
    description: z.string(),
    infos: z.array(InfoSchema),
    sections: z.array(SectionSchema)
})