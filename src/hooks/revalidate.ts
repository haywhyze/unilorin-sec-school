import type { CollectionAfterChangeHook } from 'payload'
import { revalidatePath } from 'next/cache'

export const revalidateCollection =
  (paths: string[]): CollectionAfterChangeHook =>
  ({ doc, req: { payload, context } }) => {
    if (!context.disableRevalidate) {
      for (const p of paths) {
        payload.logger.info(`Revalidating path: ${p}`)
        revalidatePath(p)
      }

      // Always revalidate homepage since it shows featured content
      revalidatePath('/')
    }
    return doc
  }
