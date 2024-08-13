import ItemCarrinho from '@/data/model/ItemCarrinho'
import { IconMinus, IconPlus, IconX } from '@tabler/icons-react'
import Image from 'next/image'

export interface AreaItemCarrinhoProps {
    item: ItemCarrinho
    adicionar?: (item: ItemCarrinho) => void
    remover?: (item: ItemCarrinho) => void
}

export default function AreaItemCarrinho(props: Readonly<AreaItemCarrinhoProps>) {
    return (
        <div className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden">
            <div className="relative w-28 h-28">
                <Image
                    src={props.item.produto.imagem}
                    alt={props.item.produto.nome}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col justify-center flex-1" >
                <span className="text-xl font-bold text-zinc-200">{props.item.produto.nome}</span>
                <span className="text-sm text-zinc-200">{props.item.produto.descricao}</span>
                <div className="flex items-center gap-2 mt-2 text-zinc-400 text-lg font-bold">
                    <span className="text-zinc-200">R$ {props.item.produto.preco.toFixed(2)}</span>
                    <IconX size={20} />
                    <span className="text-zinc-200">{props.item.quantidade}</span>
                    <span className="text-zinc-200">=</span>
                    <span className="text-yellow-500">
                        R$ {(props.item.produto.preco * props.item.quantidade).toFixed(2)}
                    </span>
                </div>
            </div>
            <div className="flex gap-2 items-center px-5">
                <button onClick={() => props.remover?.(props.item)} className="text-zinc-200">
                    <IconMinus />
                </button>
                <span className="flex px-4 py-2 rounded-md bg-black text-zinc-200">{props.item.quantidade}</span>
                <button onClick={() => props.adicionar?.(props.item)} className="text-zinc-200">
                    <IconPlus />
                </button>
            </div>
        </div>
    )
}
