import { ArrowRight } from 'phosphor-react'
import { HeroCard, HeroCardVariant } from './Hero.styles'

interface HeroCardProps {
  size: HeroCardVariant
  id: number
  name: string
  thumbPath: string
}

export function Hero({ size, id, name, thumbPath }: HeroCardProps) {
  return (
    <HeroCard size={size} href={`/hero/${id}`}>
      <div className="arrow">
        <ArrowRight size={16} weight="bold" />
      </div>

      <img src={thumbPath} alt={name} />

      <div className={`hero-name ${size === 'xs' && 'name-limit'}`}>
        <strong className={size === 'xs' ? 'name-limit' : ''}>{name}</strong>
      </div>
    </HeroCard>
  )
}
