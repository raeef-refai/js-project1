import requests
import json

repoSearch=input('Enter the rapository name:\n')
url="https://api.github.com/search/repositories?q=%s&page=1&per_page=10"%repoSearch
r=requests.get(url).json()
for item in r:
	temp=json.loads(item)
	print(temp["items"])
	# UserProfile=item.owner.url
	# ProjectName=item.full_name;
	# RepoLink = item.html_url;
	# Description = item.description;
	# mainOutput= "\n UserProfile is: %s, and project name is: %s, and RepoLink is: %s, \nand its about: %s" % (UserProfile,ProjectName,RepoLink,Description)
	# print(mainOutput)
	

