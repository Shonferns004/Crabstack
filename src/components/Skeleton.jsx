export function SkeletonRow({ cols = 4 }) {
  return (
    <tr className="border-b border-zinc-800/50">
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} className="p-4">
          <div className="h-4 bg-zinc-800 rounded animate-pulse" style={{ width: `${60 + Math.random() * 30}%` }} />
        </td>
      ))}
    </tr>
  )
}

export function SkeletonCard() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex items-center gap-4 animate-pulse">
      <div className="size-10 rounded bg-zinc-800" />
      <div className="flex-1 space-y-2">
        <div className="h-8 w-16 bg-zinc-800 rounded" />
        <div className="h-3 w-24 bg-zinc-800 rounded" />
      </div>
    </div>
  )
}

export function SkeletonMedia() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden animate-pulse">
      <div className="aspect-square bg-zinc-800" />
      <div className="p-2">
        <div className="h-3 w-20 bg-zinc-700 rounded" />
      </div>
    </div>
  )
}

export function SkeletonForm() {
  return (
    <div className="space-y-4 animate-pulse">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i}>
          <div className="h-3 w-24 bg-zinc-800 rounded mb-1" />
          <div className="h-10 w-full bg-zinc-800 rounded-lg" />
        </div>
      ))}
    </div>
  )
}

export function SkeletonText({ lines = 3 }) {
  return (
    <div className="space-y-2 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-zinc-800 rounded" style={{ width: `${80 - i * 15}%` }} />
      ))}
    </div>
  )
}
