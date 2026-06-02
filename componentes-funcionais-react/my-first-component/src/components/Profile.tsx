import React from 'react'
import { Skills } from './Skills'

export const Profile: React.FC = () => {
  return (
    <>
      <div>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQHt4KDdeTbFow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671798420250?e=1781740800&v=beta&t=hhAQndqWg6NrK6gXpfo20bohdQ2Lavzbct-1OeP__NI"
          alt="Adão Vieira"
          width="300pix"
        />
        <Name />
        <p id="cargo">
          <b>Cargo atual</b>: Software engineer
        </p>
        <Skills />
      </div>
    </>
  )
}

export const Job: React.FC = () => {
  return <p>Maitha Tech/Cobasi</p>
}

const Name: React.FC = () => {
  return <p>Adão Vieira</p>
}
