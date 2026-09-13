export const Button = ({className = '', size = 'md', children}) => {
    const baseClasses = 'relative overflow-hidden rounded-full font-medium focus:outline-none focus:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary';

        const sizeClasses = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        }
    const classes = `${baseClasses} ${sizeClasses[size]}`;
    return <button className={classes}>
        <span className="relative flex items-center justify-center gap-2 hover:text-primary">
            {children}
        </span>
    </button>
}