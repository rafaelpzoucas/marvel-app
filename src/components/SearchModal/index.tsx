import { MagnifyingGlass, X } from 'phosphor-react'
import { SearchButton } from '../Header/Header.styles'
import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  DialogContent,
  DialogOverlay,
  HeroesList,
  SearchInput,
  SearchModalHeader,
} from './SearchModal.styles'
import { useHeroes } from '../../contexts/useHeroes'
import { Hero } from '../Hero'
import { useState, useEffect, useRef } from 'react'
import { HeroSkeleton } from '../Hero/Hero.styles'

export function SearchModal() {
  const { heroes, filteredHeroes, setFilteredHeroes, fetchHeroByName } =
    useHeroes()
  const [filter, setFilter] = useState('')

  const searchInputRef = useRef<HTMLInputElement>(null)

  const heroList = filter !== '' ? filteredHeroes : heroes

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>

    function delayedFetch() {
      if (filter !== '') {
        fetchHeroByName(filter)
      } else {
        setFilteredHeroes([])
      }
    }

    function delayRequest() {
      clearTimeout(timerId)
      timerId = setTimeout(delayedFetch, 1000)
    }

    delayRequest()

    return () => {
      clearTimeout(timerId)
    }
  }, [filter])

  const handleDialogOpen = () => {
    setTimeout(() => {
      searchInputRef.current?.focus()
    }, 200)
  }

  return (
    <Dialog.Root onOpenChange={handleDialogOpen}>
      <Dialog.Trigger asChild>
        <SearchButton>
          <MagnifyingGlass size={24} />
        </SearchButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <SearchModalHeader>
            <Dialog.Title asChild>
              <strong>search hero by name</strong>
            </Dialog.Title>
            <Dialog.Close asChild>
              <CloseButton>
                <X size={24} />
              </CloseButton>
            </Dialog.Close>
          </SearchModalHeader>

          <SearchInput>
            <MagnifyingGlass size={24} />
            <input
              ref={searchInputRef}
              type="text"
              placeholder={`Type hero's name`}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </SearchInput>

          <HeroesList>
            {heroList.length > 0 ? (
              heroList.map((hero, index) => (
                <Hero
                  key={index}
                  id={hero.id}
                  size="xs"
                  name={hero.name}
                  thumbPath={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                />
              ))
            ) : (
              <>
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
                <HeroSkeleton />
              </>
            )}
          </HeroesList>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
