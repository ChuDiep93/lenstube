import Badge from '@components/Common/Badge'
import {
  getProfilePicture,
  getRelativeTime,
  trimLensHandle
} from '@lenstube/generic'
import type { NewMirrorNotification } from '@lenstube/lens'
import { Trans } from '@lingui/macro'
import Link from 'next/link'
import type { FC } from 'react'
import React from 'react'

interface Props {
  notification: NewMirrorNotification
}

const MirroredNotification: FC<Props> = ({ notification }) => {
  return (
    <>
      <div className="flex items-center space-x-3">
        <Link
          href={`/channel/${notification?.profile?.handle}`}
          className="font-base inline-flex items-center space-x-1.5"
        >
          <img
            className="h-5 w-5 rounded-full"
            src={getProfilePicture(notification.profile, 'AVATAR')}
            alt={notification.profile?.handle}
            draggable={false}
          />
          <div className="flex items-center space-x-0.5">
            <span>{trimLensHandle(notification?.profile?.handle)}</span>
            <Badge id={notification?.profile?.id} size="xs" />
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <span className="truncate text-gray-600 dark:text-gray-400">
          <Trans>mirrored your</Trans>{' '}
          <Link
            href={`/watch/${notification?.publication.id}`}
            className="ml-1 text-indigo-500"
          >
            <Trans>video</Trans>
          </Link>
        </span>
        <div className="flex flex-none items-center text-gray-600 dark:text-gray-400">
          <span>{getRelativeTime(notification?.createdAt)}</span>
        </div>
      </div>
    </>
  )
}

export default MirroredNotification
