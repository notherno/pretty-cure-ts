import { Mana, Rikka } from './girls'
import { CureHeart, CureDiamond } from './transformees'
import { LovelyCommuneSharuru, LovelyCommuneRaquel, CureLoveads } from './items'

const transformations = [
  {
    specialItems: [
      {
        a: [CureLoveads.id],
        i: LovelyCommuneSharuru.id,
      },
    ],
    transformees: [CureHeart.id],
    speech: [
      '(シャールルーン！)',
      'プリキュア！ラブリンク！',
      '(L! O! V! E!)',
      'みなぎる愛！ キュアハート！',
      '愛を無くした悲しいジコチューさん、このキュアハートが あなたのドキドキ 取り戻してみせる！',
    ],
    transformers: [Mana.id],
  } as Transformation<
    [GirlID<'Mana'>],
    [TransformeeID<'CureHeart'>],
    [
      AttachedItem<
        SpecialItemID<'LovelyCommuneSharuru'>,
        [SpecialItemID<'CureLoveads'>]
      >
    ]
  >,
  {
    specialItems: [
      {
        a: [CureLoveads.id],
        i: LovelyCommuneRaquel.id,
      },
    ],
    transformees: [CureDiamond.id],
    speech: [
      '(ラケル！)',
      'プリキュア！ラブリンク！',
      '(L! O! V! E!)',
      '英知の光！ キュアダイヤモンド！',
      '人の思いを踏みにじるなんて許せない、このキュアダイヤモンドが あなたの頭を冷やしてあげる！',
    ],
    transformers: [Rikka.id],
  } as Transformation<
    [GirlID<'Rikka'>],
    [TransformeeID<'CureDiamond'>],
    [
      AttachedItem<
        SpecialItemID<'LovelyCommuneRaquel'>,
        [SpecialItemID<'CureLoveads'>]
      >
    ]
  >,
]

type TGirlID<T> = T extends Girl<string> ? T['id'] : never

const transformedStyle = <
  Girls extends Girl<string>[],
  Items extends AttachedItem<string, string[]>[],
  R extends Transformation<
    { [T in keyof Girls]: TGirlID<T> },
    any,
    Items
  >['transformees']
>(
  ...girls: Girls
) => (..._items: Items): R => transformations.find(t => t.transformers[0] === girls[0].id) as any

const a = transformedStyle(Mana)

a({ a: [], i: CureLoveads.id })
