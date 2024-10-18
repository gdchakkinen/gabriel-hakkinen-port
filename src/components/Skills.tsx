'use client'
// src/components/Skills.tsx
import { useState, useEffect } from 'react';

export default function Skills() {
    const [skills, setSkills] = useState<string[]>([]);

    useEffect(() => {
        // Simula uma requisição a uma API com um delay de 1 segundo
        setTimeout(() => {
            setSkills(['React', 'Next.js', 'TypeScript', 'C#', '.NET', 'Tailwind CSS']);
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen p-4 bg-transparent">
            <h2 className="text-xl font-bold mb-4 text-white">Skills</h2>
            {skills.length === 0 ? (
                <p className="text-gray-300">Loading skills...</p>
            ) : (
                <ul className="list-disc list-inside">
                    {skills.map((skill, index) => (
                        <li key={index} className="text-blue-300">{skill}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
