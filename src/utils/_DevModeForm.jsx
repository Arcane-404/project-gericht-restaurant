import { useEffect, useState } from 'react'

export const DevModeForm = ({ active = false, setState, initState, tempState }) => {
  const [ isDev, setDev ] = useState(active)
  const toggleDevMode = () => setDev(!isDev)
  useEffect(() => { setState(isDev ? tempState : initState) }, [ isDev ])

  return (
    <div>
      <input
				type="checkbox"
				name="devMode"
				id="devMode"
				checked={ isDev }
				onChange={ toggleDevMode }
      />
      <label htmlFor="devMode">
				{' '}<b>Dev Mode :: </b>
				<code>{`${ isDev }`}</code>
			</label>
    </div>
  )
}
