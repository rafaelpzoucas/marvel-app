import { ArrowRight } from 'phosphor-react'
import { HeroCard, HeroCardVariant } from './Hero.styles'

interface HeroCardProps {
  size: HeroCardVariant
  hero: string
  thumbPath: string
}

export function Hero({ size, hero, thumbPath }: HeroCardProps) {
  return (
    <HeroCard size={size}>
      <div className="arrow">
        <ArrowRight size={16} weight="bold" />
      </div>

      <img src={thumbPath} alt={hero} />

      <div className={`hero-name ${size === 'xs' && 'name-limit'}`}>
        <strong className={size === 'xs' ? 'name-limit' : ''}>{hero}</strong>
      </div>
    </HeroCard>
  )
}
