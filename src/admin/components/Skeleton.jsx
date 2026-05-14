export function SkeletonRow({ cols }) {
  return (
    <tr className="border-b border-zinc-800/50">
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} className="p-4">
          <div className="h-4 bg-zinc-800 rounded animate-pulse" />
        </td>
      ))}
    </tr>
  )
}
