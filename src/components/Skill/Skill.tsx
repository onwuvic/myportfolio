import React from 'react'

type Props = {
    skills: string[];
}

const Skill = (props: Props) => (
    <div className="skills">
        <ul>
            {
                props.skills.map(skill => (<li>{skill}</li>))
            }
        </ul>
    </div>
);

export default Skill;
