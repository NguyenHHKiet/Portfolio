import React from 'react'
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
        <Typewriter
            options={{
                strings: [
                "Developer",
                "Deep Learning Engineer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    </div>
  )
}

export default Type