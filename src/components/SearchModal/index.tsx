import { MagnifyingGlass, X } from 'phosphor-react'
import { SearchButton } from '../Header/Header.styles'
import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  DialogContent,
  HeroesList,
  SearchInput,
  SearchModalHeader,
} from './SearchModal.styles'
import { useHeroes } from '../../contexts/useHeroes'
import { Hero } from '../Hero'
import { useState, useEffect } from 'react'
import { debounce } from 'lodash'

export function SearchModal() {
  const { heroes, filteredHeroes, fetchHeroByName } = useHeroes()
  const [filter, setFilter] = useState('')

  const debouncedFetchHeroByName = debounce(fetchHeroByName, 1000)

  const heroList = filter !== '' ? filteredHeroes : heroes

  useEffect(() => {
    debouncedFetchHeroByName(filter)
  }, [filter])

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <SearchButton>
          <MagnifyingGlass size={24} />
        </SearchButton>
      </Dialog.Trigger>

      <Dialog.Portal>
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
              <div>Carregando...</div>
            )}
          </HeroesList>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
