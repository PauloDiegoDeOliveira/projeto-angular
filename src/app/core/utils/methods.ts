import { inject } from "@angular/core"
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router"
import { map } from "rxjs"

export const getQueryParamsFromUrl$ = () => {
  const activatedRoute = inject(ActivatedRoute)
  return (param: string = 'id') => {
    return activatedRoute.queryParams.pipe(
      map(params => params[param])
    )
  }
}

export const getQueryParam = () => {
  const route = inject(ActivatedRoute);
  return (param: string) => route.snapshot.queryParams[param];
}

export const getRouteParam = () => {
  const route = inject(ActivatedRoute);
  return (param: string) => route.snapshot.paramMap.get(param)
}

export const getRouteData = () => {
  const route = inject(ActivatedRoute);
  return (param: string) => route.snapshot.data[param]
}

export const onNavigateTo = () => {
  const router = inject(Router)
  return (commands: any[], extras?: NavigationExtras | undefined) => router.navigate(commands, extras)
}

export const parseParams = (obj: any): string => {
  return Object.entries(obj)
    .map(entry => entry.join('='))
    .join('&')
}