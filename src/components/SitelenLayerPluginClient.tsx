'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const TP_SCOPE_SELECTOR = '#tp-content-scope';

export default function SitelenLayerPluginClient(): null {
  const pathname = usePathname();

  useEffect(() => {
    let destroyed = false;
    let plugin: {
      init: () => void;
      destroy: () => void;
    } | null = null;

    async function initPlugin(): Promise<void> {
      const { createSitelenLayerPluginFromProfiles } = await import('sitelen-layer-plugin');

      if (destroyed) {
        return;
      }

      plugin = createSitelenLayerPluginFromProfiles(
        [
          {
            id: 'tp-locale',
            priority: 20,
            match: { pathnamePrefix: '/tp' },
            config: {
              container: TP_SCOPE_SELECTOR,
              layers: ['latin', 'sitelen-pona', 'sitelen-emoji'],
              defaultLayer: 'latin',
              requireDominantTokiPona: true,
              threshold: 0.7,
              showToggle: true,
              toggleMount: '#sitelen-layer-toggle-mount',
              debug: true,
              debugOverlay: true,
              mutationObserver: {
                enabled: true,
                incremental: true,
                observeAttributes: false,
                debounceMs: 140
              },
              sitelenPona: {
                enabled: true,
                fontFamily: "'nasin-sitelen-pu', 'Noto Sans', sans-serif",
                fontCssUrl: 'https://cdn.jsdelivr.net/gh/ETBCOR/nasin-sitelen-pu@latest/nasin-sitelen-pu.css',
                className: 'toki-free-sitelen-pona',
                renderStrategy: 'font-only'
              }
            }
          },
          {
            id: 'non-tp-locale',
            priority: 10,
            match: { pathnamePrefix: '/en' },
            config: {
              container: TP_SCOPE_SELECTOR,
              showToggle: false,
              layers: ['latin'],
              defaultLayer: 'latin',
              requireDominantTokiPona: true
            }
          }
        ],
        {
          baseConfig: {
            onProfileMatch: (profileId) => {
              // eslint-disable-next-line no-console
              console.info('[toki-free-kit] sitelen profile:', profileId ?? 'none');
            }
          }
        }
      );

      plugin.init();
    }

    initPlugin();

    return () => {
      destroyed = true;
      plugin?.destroy();
    };
  }, [pathname]);

  return null;
}
