
export function ListInfo({ Icon, label }: { Icon: any; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-1">
      <Icon size={22}/>
      <span className="text-lg" >{label}</span>
    </div>
  );
}
