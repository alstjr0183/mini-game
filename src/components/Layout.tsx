type AppLayoutprops ={
  children: string,
}

export default function Layout({ children }:AppLayoutprops) {
  return (
      <div>{children}</div>
  );
}