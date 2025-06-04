import { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

interface Stat {
  label: string
  value: number
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 1rem;
  background: #fff8f2;
`

const Item = styled.div`
  text-align: center;
  color: #b52b1c;
`

const Number = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 600;
`

export function StatsSection() {
  const stats = useMemo<Stat[]>(
    () => [
      { label: 'Places Reviewed', value: 500 },
      { label: 'Countries Explored', value: 50 },
      { label: 'Happy Pizza Lovers', value: 100000 },
    ],
    []
  )
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const timers = stats.map((stat, index) =>
      setInterval(() => {
        setCounts((c) => {
          const next = [...c]
          if (next[index] < stat.value) {
            next[index] += Math.ceil(stat.value / 40)
          } else {
            next[index] = stat.value
          }
          return next
        })
      }, 50)
    )
    return () => {
      timers.forEach((t) => clearInterval(t))
    }
  }, [stats])

  return (
    <Wrapper>
      {stats.map((stat, i) => (
        <Item key={stat.label}>
          <Number>
            {counts[i]
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            +
          </Number>
          {stat.label}
        </Item>
      ))}
    </Wrapper>
  )
}
