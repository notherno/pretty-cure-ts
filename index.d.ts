type ID<T extends string, N extends string> = string &
  { [key in T]: never } &
  { [key in N]: never }

type GirlID<N extends string> = ID<'Girl', N>
type SpecialItemID<N extends string> = ID<'SpecialItem', N>
type TransformeeID<N extends string> = ID<'Transformee', N>

interface Girl<N extends string> {
  id: GirlID<N>
  nameEn: string
  nameJa: string
}

interface SpecialItem<N extends string> {
  id: SpecialItemID<N>
  nameEn: string
  nameJa: string
  attachments: SpecialItemID<string>[]
}

type AttachedItem<I extends string, A extends string[]> = {
  a: A
  i: I
}

interface Transformee<N extends string> {
  id: TransformeeID<N>
  nameEn: string
  nameJa: string
  variationEn: string
  variationJa: string
  introducesHerselfAs: string
}

interface TransformedGroup {
  nameJa: string
  nameEn: string
  variationJa: string
  variationEn: string
  transformerIds: TransformeeID<string>[]
}

interface NonItemPurification {
  purifiers: TransformeeID<string>[]
  speech: string[]
}

interface Purification extends NonItemPurification {
  specialItems: AttachedItem<string, string[]>[]
}

interface Transformation<GirlIDs, TransformeeIDs, SpecialItems> {
  transformers: GirlIDs
  transformees: TransformeeIDs
  specialItems: SpecialItems
  speech: string[]
}
