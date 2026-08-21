import urllib.request, re, ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://carla-y-angel-qcbv.vercel.app/carlayangel'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
    scripts = re.findall(r'src="(/carlayangel/_next/static/chunks/[^"]+)"', html)
    print(f'Found {len(scripts)} script chunks on carla-y-angel')
    for s in scripts:
        s_url = 'https://carla-y-angel-qcbv.vercel.app' + s
        content = urllib.request.urlopen(urllib.request.Request(s_url, headers={'User-Agent': 'Mozilla/5.0'}), context=ctx).read().decode('utf-8')
        if 'supabase' in content.lower():
            print('Found supabase reference in:', s)
            if 'mnswhidquvjaaviyqtfi' in content:
                print('  ==> SUCCESS: Supabase URL mnswhidquvjaaviyqtfi is present in deployed bundle!')
            else:
                print('  ==> WARNING: Supabase URL NOT in deployed bundle (needs redeploy with env vars in Vercel)')
except Exception as e:
    print('Error:', e)
