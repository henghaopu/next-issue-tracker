type DashboardLayoutProps = {
  children: React.ReactNode
}

function DashboardLayout({ children }: Readonly<DashboardLayoutProps>) {
  return (
    <div>
      <div>Dashboard Layout</div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
