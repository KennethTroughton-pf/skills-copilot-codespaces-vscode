export interface SkillsMember {
    name: string;
    age: number;
    skills: string[];
}

export function createMember(name: string, age: number, skills: string[]): SkillsMember {
    return {
        name,
        age,
        skills,
    };
}

