import Link from 'next/link'
import { useRouter } from 'next/router'

import { useSelectedOrganization, useSelectedProject } from 'hooks'
import FeedbackDropdown from '../ProjectLayout/LayoutHeader/FeedbackDropdown'
import HelpPopover from '../ProjectLayout/LayoutHeader/HelpPopover'
import NotificationsPopover from '../ProjectLayout/LayoutHeader/NotificationsPopover'
import ProjectDropdown from '../ProjectLayout/LayoutHeader/ProjectDropdown'
import OrganizationDropdown from './OrganizationDropdown'
import UserSettingsDropdown from './UserSettingsDropdown'
import { Button, IconSettings } from 'ui'

const AppHeader = () => {
  const router = useRouter()
  const project = useSelectedProject()
  const organization = useSelectedOrganization()

  return (
    <div className="flex items-center justify-between px-4 py-1 bg-scale-200 border-b">
      <div className="flex items-center space-x-4">
        <Link href={`/org/${organization?.slug}`}>
          <a className="block">
            <img
              src={`${router.basePath}/img/supabase-logo.svg`}
              alt="Supabase"
              className="mx-auto h-[40px] w-6 cursor-pointer rounded"
            />
          </a>
        </Link>
        <OrganizationDropdown />
        {project !== undefined && <ProjectDropdown alt />}
      </div>

      <div className="flex items-center space-x-4">
        <FeedbackDropdown alt />
        <NotificationsPopover alt />
        <HelpPopover alt />
        <Link href={`/org/${organization?.slug}/settings`}>
          <a>
            <Button
              type="text"
              className="px-1"
              icon={<IconSettings size={18} strokeWidth={1.5} className="text-scale-1100" />}
            />
          </a>
        </Link>
        <UserSettingsDropdown />
      </div>
    </div>
  )
}

export default AppHeader