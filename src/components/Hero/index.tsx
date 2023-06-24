import { HeroCard, HeroCardVariant } from './Hero.styles'

interface HeroCardProps {
  size: HeroCardVariant
  hero: string
  thumbPath: string
}

export function Hero({ size, hero, thumbPath }: HeroCardProps) {
  return (
    <HeroCard size={size}>
      <img src={thumbPath} alt={hero} />
      <div className={`hero-name ${size === 'xs' && 'name-limit'}`}>
        <strong className={size === 'xs' ? 'name-limit' : ''}>{hero}</strong>
      </div>
    </HeroCard>
  )
}
